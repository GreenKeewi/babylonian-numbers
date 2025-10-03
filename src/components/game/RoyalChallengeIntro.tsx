'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface RoyalChallengeIntroProps {
  onAccept: () => void;
  onDecline: () => void;
}

export default function RoyalChallengeIntro({ onAccept, onDecline }: RoyalChallengeIntroProps) {
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
          <CardTitle className="font-headline text-3xl md:text-4xl text-yellow-900/90">A Challenge from the King</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">You have proven yourself a capable scribe, but true mastery requires a final test.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            The King has prepared two final, difficult tasks to ensure you are among the most elite scribes in Babylon. Only by solving these will you be granted access to his Royal Report.
          </p>
          <p className="font-bold text-accent">Do you accept the challenge?</p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4">
          <Button onClick={onAccept} size="lg" className="w-full sm:w-auto flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg">
            Accept Challenge
          </Button>
           <Button onClick={onDecline} size="lg" variant="outline" className="w-full sm:w-auto flex-1">
            Play Again Later
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}