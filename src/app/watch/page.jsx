"use client"
import dynamic from "next/dynamic"
import Link from "next/link"
const PrimaryButton = dynamic(() => import('@/components/button/primaryButton'))

export default function Watch() {

  const handleWatch = () => {
    console.log("Vous regargez la video en ce moment...")
  }

  return (
    <div>
      {/* Bouton pour retour */}
      <Link href='/'>
        <PrimaryButton
          label="retour"
        />
      </Link>
      <h1>
        Here to watch the video
      </h1>
      {/* Bouton pour confirmer */}
      <PrimaryButton
        label="voir"
        onClick={handleWatch}
      />
    </div>
  )
}
