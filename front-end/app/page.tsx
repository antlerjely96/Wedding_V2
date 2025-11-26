"use client"

import { useState } from "react"
import HeroSection from "@/components/hero-section"
import CoupleInfo from "@/components/couple-info"
import WeddingDetails from "@/components/wedding-details"
import Timeline from "@/components/timeline"
import RSVPForm from "@/components/rsvp-form"
import GiftInfo from "@/components/gift-info"
import Countdown from "@/components/countdown"
import Footer from "@/components/footer"

export default function Home() {
  const [audioPlaying, setAudioPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background music toggle */}
      <button
        onClick={() => setAudioPlaying(!audioPlaying)}
        className="fixed bottom-4 right-4 z-40 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm hover:opacity-80 transition-opacity"
      >
        {audioPlaying ? "🔊 Music On" : "🔇 Music Off"}
      </button>

      <HeroSection />
      <CoupleInfo />
      <WeddingDetails />
      <Countdown />
      <Timeline />
      <RSVPForm />
      <GiftInfo />
      <Footer />
    </div>
  )
}
