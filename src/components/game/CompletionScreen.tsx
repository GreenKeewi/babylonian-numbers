"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface CompletionScreenProps {
  onPlayAgain: () => void;
}

const sources = [
  { name: "British Museum – Babylonian Mathematics", url: "https://www.britishmuseum.org/" },
  { name: "Smithsonian – Babylonian Number System", url: "https://www.si.edu/" },
  { name: "Khan Academy – Babylonian Numerals", url: "https://www.khanacademy.org/" },
];

export default function CompletionScreen({ onPlayAgain }: CompletionScreenProps) {
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
          <CardTitle className="font-headline text-3xl md:text-4xl text-yellow-900/90">Congratulations!</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">You are a true Scribe of Babylon!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            You've mastered the basics of the ancient number system. Today, we still use Babylonian math in how we measure time (60 seconds in a minute, 60 minutes in an hour) and geometry (360° in a circle).
          </p>
          <div>
            <h3 className="font-headline text-xl text-yellow-900/90 mb-3">Continue Your Journey</h3>
            <ul className="space-y-2">
              {sources.map((source) => (
                <li key={source.name}>
                  <Link href={source.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {source.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
