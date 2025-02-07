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

  // Mettre à jour l'épisode courant quand l'ID change
  useEffect(() => {
    const episode = episodes.find(ep => ep.driveId === currentEpisodeId);
    setCurrentEpisode(episode);
    setIframeKey(prev => prev + 1);
  }, [currentEpisodeId]);

  const getEmbedUrl = (driveId) => {
    return `https://drive.google.com/file/d/${driveId}/preview`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Navigation supérieure */}
      <div className="flex items-center justify-between">
        <Link href='/'>
          <PrimaryButton label="Retour à l'accueil" />
        </Link>
        {currentEpisode && (
          <h1 className="text-xl font-bold text-gray-100">
            Episode {currentEpisode.number} - {currentEpisode.title}
          </h1>
        )}
      </div>

      {/* Lecteur vidéo */}
      <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
        <iframe
          key={iframeKey}
          src={getEmbedUrl(currentEpisodeId)}
          className="w-full h-full absolute inset-0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          referrerPolicy="no-referrer"
        ></iframe>
      </div>

      {/* Navigation des épisodes */}
      <div className="flex items-center justify-between">
        <div>
          {prevEpisode && (
            <Link href={`/watch/${prevEpisode.driveId}`}>
              <PrimaryButton
                label={
                  <div className="flex items-center space-x-2">
                    <ChevronLeft className="w-4 h-4" />
                    <span>Episode {prevEpisode.number}</span>
                  </div>
                }
              />
            </Link>
          )}
        </div>
        <div>
          {nextEpisode && (
            <Link href={`/watch/${nextEpisode.driveId}`}>
              <PrimaryButton
                label={
                  <div className="flex items-center space-x-2">
                    <span>Episode {nextEpisode.number}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                }
              />
            </Link>
          )}
        </div>
      </div>

      {/* Sélecteur d'épisodes */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-100 mb-4">Tous les épisodes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {episodes.map((episode) => (
            <Link
              href={`/watch/${episode.driveId}`}
              key={episode.number}
            >
              <div className={`p-3 rounded-lg text-center cursor-pointer transition-colors duration-200 ${episode.driveId === currentEpisodeId
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-800/30 hover:bg-gray-800/50 text-gray-300'
                }`}>
                Episode {episode.number}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}