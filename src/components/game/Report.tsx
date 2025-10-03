"use client";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface ReportProps {
  onPlayAgain: () => void;
}

export default function Report({ onPlayAgain }: ReportProps) {
    const tabletBg = PlaceHolderImages.find(p => p.id === 'clay-tablet-background');

  return (
    <Card className="w-full max-w-2xl relative overflow-hidden shadow-2xl border-4 border-yellow-900/50 bg-card text-center">
        {tabletBg && (
        <Image
          src={tabletBg.imageUrl}
          alt={tabletBg.description}
          data-ai-hint={tabletBg.imageHint}
          fill
          className="object-cover opacity-20"
        />
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-card/50 to-card" />
        <div className="relative z-10">
            <CardHeader>
                <CardTitle className="font-headline text-3xl md:text-4xl text-yellow-900/90">The King's Royal Report</CardTitle>
            </CardHeader>
            <CardContent>
                <p>You have proven your exceptional skill and are indeed a master scribe.</p>
                <p className="mt-4">As a reward for your diligence, the king grants you access to his royal report.</p>
                <Link href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-accent text-accent-foreground px-6 py-3 rounded-md font-bold hover:bg-accent/90">
                View Report
                </Link>
            </CardContent>
            <CardFooter>
                 <Button onClick={onPlayAgain} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg">
                    Play Again
                </Button>
            </CardFooter>
        </div>
    </Card>
  );
}