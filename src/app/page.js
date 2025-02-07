/* eslint-disable react/no-unescaped-entities */
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { episodes } from '@/components/constants/episodes';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-12">
      {/* En-tête avec image et informations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
              src="/youjo-senki.jpg"
              width={400}
              height={600}
              alt="Picture of the author"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-100">
              Youjo Senki (幼女戦記)
            </h1>
            <p className="text-xl text-gray-400 italic">
              Saga of Tanya the Evil
            </p>
          </div>

          {/* Informations */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <span className="text-gray-400">Format :</span>
                <span className="ml-2 text-gray-200">Série TV</span>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <span className="text-gray-400">Épisodes :</span>
                <span className="ml-2 text-gray-200">12</span>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <span className="text-gray-400">Durée :</span>
                <span className="ml-2 text-gray-200">24 minutes</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <span className="text-gray-400">Année :</span>
                <span className="ml-2 text-gray-200">2017</span>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <span className="text-gray-400">Studio :</span>
                <span className="ml-2 text-gray-200">NUT</span>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <span className="text-gray-400">Genres :</span>
                <span className="ml-2 text-gray-200">Action, Fantastique, Militaire</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Synopsis */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-100">Synopsis</h2>
        <div className="bg-gray-800/30 rounded-xl p-6 text-gray-300 leading-relaxed">
          <p>
            Salaryman, athée convaincu et fidèle aux principes du capitalisme et de l'efficacité, se retrouve confronté à un être mystérieux se présentant comme Dieu après sa mort. Ce dernier, offensé par son manque de foi, décide de le faire renaître dans un monde en guerre proche de l'Europe du début du XXe siècle.
          </p>
          <p className="mt-4">
            Réincarné en petite fille, Tanya Degurechaff, il devra gravir les échelons de l'armée impériale pour s'assurer une vie confortable, loin du front. Cependant, son excellence et ses capacités exceptionnelles en magie la propulsent constamment au cœur des batailles les plus dangereuses...
          </p>
        </div>
      </section>

      {/* Liste des épisodes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-100">Épisodes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {episodes.map((episode) => (
            <Link 
              href={`/watch/${episode.driveId}`}
              key={episode.number}
            >
              <div className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-colors duration-200 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-gray-400">
                    {episode.number.toString().padStart(2, '0')}
                  </span>
                  <p className="text-gray-200">{episode.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}