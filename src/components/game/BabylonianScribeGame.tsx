"use client";

import { useState, useMemo, useEffect } from 'react';
import { levels, type Level } from '@/lib/levels';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { HelpCircle, CheckCircle2, XCircle, Star } from 'lucide-react';
import CuneiformOne from '@/components/icons/CuneiformOne';
import CuneiformTen from '@/components/icons/CuneiformTen';
import CompletionScreen from './CompletionScreen';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type GameState = 'playing' | 'feedback' | 'finished';
type Feedback = 'correct' | 'incorrect' | null;

export default function BabylonianScribeGame() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [gameState, setGameState] = useState<GameState>('playing');
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [userInputSymbols, setUserInputSymbols] = useState<('1' | '10')[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const tabletBg = PlaceHolderImages.find(p => p.id === 'clay-tablet-background');

  const currentLevel = useMemo(() => levels[levelIndex], [levelIndex]);
  const userAnswerValue = useMemo(() => {
    return userInputSymbols.reduce((acc, symbol) => {
      return acc + (symbol === '1' ? 1 : 10);
    }, 0);
  }, [userInputSymbols]);

  const handleSymbolClick = (symbol: '1' | '10') => {
    if (userInputSymbols.length < 15) {
      setUserInputSymbols([...userInputSymbols, symbol]);
    }
  };

  const handleClear = () => {
    setUserInputSymbols([]);
  };
  
  const handleBackspace = () => {
    setUserInputSymbols(userInputSymbols.slice(0, -1));
  };

  const handleSubmit = () => {
    if (userAnswerValue === currentLevel.answer) {
      setFeedback('correct');
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    } else {
      setFeedback('incorrect');
    }
    setGameState('feedback');
  };

  const handleNext = () => {
    setFeedback(null);
    setUserInputSymbols([]);
    if (levelIndex < levels.length - 1) {
      setLevelIndex(levelIndex + 1);
      setGameState('playing');
    } else {
      setGameState('finished');
    }
  };

  const handleTryAgain = () => {
    setFeedback(null);
    setGameState('playing');
    setUserInputSymbols([]);
  };

  const handlePlayAgain = () => {
    setLevelIndex(0);
    setGameState('playing');
    setFeedback(null);
    setUserInputSymbols([]);
  };

  if (gameState === 'finished') {
    return <CompletionScreen onPlayAgain={handlePlayAgain} />;
  }

  return (
    <Card className="w-full max-w-2xl relative overflow-hidden shadow-2xl border-4 border-yellow-900/50 bg-card">
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
      
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-50">
          {[...Array(20)].map((_, i) => (
            <Star key={i} className="absolute text-yellow-400 animate-ping" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDuration: `${Math.random() * 1 + 1}s` }} />
          ))}
        </div>
      )}

      <div className="relative z-10">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center mb-2">
            <CardTitle className="font-headline text-3xl md:text-4xl text-yellow-900/90">Babylonian Scribe</CardTitle>
            <p className="text-sm font-bold text-muted-foreground">Level {currentLevel.level} / {levels.length}</p>
          </div>
          <Progress value={((levelIndex + 1) / levels.length) * 100} className="w-full h-2 bg-primary/20" />
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="text-center p-4 rounded-lg bg-black/5">
            <div className="flex items-center justify-center gap-2 mb-2">
              <h2 className="text-xl font-bold font-headline">{currentLevel.title}</h2>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                    <HelpCircle className="h-5 w-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <p className="text-sm">{currentLevel.tooltip}</p>
                </PopoverContent>
              </Popover>
            </div>
            <p className="text-muted-foreground">{currentLevel.task}</p>
            <p className="text-5xl font-headline font-bold text-accent my-4">{currentLevel.problem}</p>
          </div>

          <div className="min-h-[120px] bg-black/10 rounded-lg p-4 flex flex-col justify-center items-center border-2 border-dashed border-yellow-900/30">
            <p className="self-start text-lg font-bold text-yellow-900/90 mb-2">Your Answer: {userAnswerValue}</p>
            <div className="flex flex-wrap items-center justify-center gap-1">
              {userInputSymbols.length === 0 && <span className="text-muted-foreground">Click symbols to write...</span>}
              {userInputSymbols.map((symbol, i) => (
                symbol === '1' ? <CuneiformOne key={i} className="h-8 w-8 text-accent" /> : <CuneiformTen key={i} className="h-8 w-8 text-accent" />
              ))}
            </div>
          </div>
          
          {gameState === 'feedback' && feedback && (
            <Alert variant={feedback === 'correct' ? 'default' : 'destructive'} className={`bg-opacity-80 ${feedback === 'correct' ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'}`}>
              {feedback === 'correct' ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
              <AlertTitle className="font-bold">{feedback === 'correct' ? 'Correct!' : 'Not Quite!'}</AlertTitle>
              <AlertDescription>
                {feedback === 'correct' ? 'Excellent work, scribe!' : `The correct value is ${currentLevel.answer}. Try to form that number.`}
              </AlertDescription>
            </Alert>
          )}

        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <div className="flex justify-center gap-4 w-full">
            <Button onClick={() => handleSymbolClick('10')} size="lg" className="h-20 w-20 flex-col gap-1 bg-secondary hover:bg-secondary/80 text-secondary-foreground border-2 border-yellow-900/20 shadow-md">
              <CuneiformTen className="h-8 w-8" />
              <span className="font-bold text-xl">10</span>
            </Button>
            <Button onClick={() => handleSymbolClick('1')} size="lg" className="h-20 w-20 flex-col gap-1 bg-secondary hover:bg-secondary/80 text-secondary-foreground border-2 border-yellow-900/20 shadow-md">
              <CuneiformOne className="h-8 w-8" />
              <span className="font-bold text-xl">1</span>
            </Button>
          </div>
          <div className="flex justify-center gap-2 w-full">
             <Button onClick={handleBackspace} variant="outline" className="flex-1 bg-secondary/50">Backspace</Button>
             <Button onClick={handleClear} variant="destructive" className="flex-1 bg-red-800/80 hover:bg-red-800 text-white">Clear</Button>
          </div>
          
          {gameState === 'playing' && <Button onClick={handleSubmit} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg">Submit</Button>}
          {gameState === 'feedback' && feedback === 'correct' && <Button onClick={handleNext} size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg">Next Level</Button>}
          {gameState === 'feedback' && feedback === 'incorrect' && <Button onClick={handleTryAgain} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg">Try Again</Button>}
        </CardFooter>
      </div>
    </Card>
  );
}
