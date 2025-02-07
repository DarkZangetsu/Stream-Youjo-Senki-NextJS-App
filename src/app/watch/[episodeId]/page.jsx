"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const PrimaryButton = dynamic(() => import('@/components/button/primaryButton'));
import { episodes } from '@/components/constants/episodes';

export default function Watch() {
  const params = useParams();
  const currentEpisodeId = params?.episodeId;
  const [iframeKey, setIframeKey] = useState(0);
  const [currentEpisode, setCurrentEpisode] = useState(null);

  const currentIndex = episodes.findIndex(ep => ep.driveId === currentEpisodeId);
  const prevEpisode = currentIndex > 0 ? episodes[currentIndex - 1] : null;
  const nextEpisode = currentIndex < episodes.length - 1 ? episodes[currentIndex + 1] : null;

  useEffect(() => {
    const episode = episodes.find(ep => ep.driveId === currentEpisodeId);
    setCurrentEpisode(episode);
    setIframeKey(prev => prev + 1);
  }, [currentEpisodeId]);

  const getEmbedUrl = (driveId) =>
    `https://drive.google.com/file/d/${driveId}/preview`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Bouton Retour en haut */}
      <div>
        <Link href="/">
          <PrimaryButton
            label="Retour"
            className="text-sm sm:text-base"
          />
        </Link>
      </div>

      {/* Titre de l'épisode */}
      {currentEpisode && (
        <h1 className="text-xl font-bold text-gray-100">
          Episode {currentEpisode.number} - {currentEpisode.title}
        </h1>
      )}

      {/* Conteneur vidéo responsive */}
      <div className="relative w-full aspect-[16/9] bg-gray-800 rounded-lg overflow-hidden">
        <iframe
          key={iframeKey}
          src={getEmbedUrl(currentEpisodeId)}
          className="w-full h-full block"
          allow="autoplay; encrypted-media"
          allowFullScreen
          referrerPolicy="no-referrer"
        ></iframe>
      </div>

      {/* Navigation entre épisodes (boutons actions) */}
      <div className="flex items-center justify-between">
        {prevEpisode && (
          <Link href={`/watch/${prevEpisode.driveId}`}>
            <PrimaryButton
              label={
                <div className="flex items-center space-x-2 text-sm sm:text-base">
                  <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Episode {prevEpisode.number}</span>
                </div>
              }
            />
          </Link>
        )}
        {nextEpisode && (
          <Link href={`/watch/${nextEpisode.driveId}`}>
            <PrimaryButton
              label={
                <div className="flex items-center space-x-2 text-sm sm:text-base">
                  <span>Episode {nextEpisode.number}</span>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              }
            />
          </Link>
        )}
      </div>

      {/* Liste de tous les épisodes */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-100 mb-4">Tous les épisodes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {episodes.map((episode) => (
            <Link href={`/watch/${episode.driveId}`} key={episode.number}>
              <div
                className={`p-3 rounded-lg text-center cursor-pointer transition-colors duration-200 ${
                  episode.driveId === currentEpisodeId
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-800/30 hover:bg-gray-800/50 text-gray-300'
                }`}
              >
                Episode {episode.number}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
