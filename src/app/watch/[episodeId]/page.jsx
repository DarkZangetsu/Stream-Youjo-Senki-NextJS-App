"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useEffect, useState, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

const PrimaryButton = dynamic(() => import('@/components/button/primaryButton'));
import { episodes } from '@/components/constants/episodes';

export default function Watch() {
  const params = useParams();
  const currentEpisodeId = params?.episodeId;
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  const currentIndex = episodes.findIndex(ep => ep.driveId === currentEpisodeId);
  const prevEpisode = currentIndex > 0 ? episodes[currentIndex - 1] : null;
  const nextEpisode = currentIndex < episodes.length - 1 ? episodes[currentIndex + 1] : null;

  useEffect(() => {
    const episode = episodes.find(ep => ep.driveId === currentEpisodeId);
    setCurrentEpisode(episode);

    if (videoRef.current && !playerRef.current) {
      playerRef.current = new Plyr(videoRef.current, {
        controls: [
          'play-large',
          'play',
          'progress',
          'current-time',
          'mute',
          'volume',
          'captions',
          'settings',
          'pip',
          'fullscreen'
        ],
        settings: ['quality', 'speed'],
        quality: {
          default: 1080,
          options: [2160, 1440, 1080, 720, 576, 480, 360, 240]
        }
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [currentEpisodeId]);

  const getVideoUrl = (driveId) => {
    return `https://drive.google.com/uc?export=download&id=${driveId}`;
  };


  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      <div>
        <Link href="/">
          <PrimaryButton label="Retour" className="text-sm sm:text-base" />
        </Link>
      </div>

      {currentEpisode && (
        <h1 className="text-xl font-bold text-gray-100">
          Episode {currentEpisode.number} - {currentEpisode.title}
        </h1>
      )}

      <div className="video-wrapper relative w-full max-w-full">
        <div className="aspect-[16/9] bg-gray-800 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src={`https://drive.google.com/file/d/${currentEpisodeId}/preview`}
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
      </div>

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

      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-100 mb-4">Tous les épisodes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {episodes.map((episode) => (
            <Link href={`/watch/${episode.driveId}`} key={episode.number}>
              <div
                className={`p-3 rounded-lg text-center cursor-pointer transition-colors duration-200 ${episode.driveId === currentEpisodeId
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