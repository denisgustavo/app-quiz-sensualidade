'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Heart, Sparkles, Crown, Eye, Flame } from 'lucide-react'

interface Question {
  id: number
  question: string
  options: {
    letter: 'A' | 'B' | 'C' | 'D' | 'E'
    text: string
  }[]
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quando você caminha sozinha pela rua, você sente que…",
    options: [
      { letter: 'A', text: "Caminha rápido, com passos objetivos e sem pensar muito nos movimentos." },
      { letter: 'B', text: "Anda de forma leve, solta, sem muita rigidez ou controle." },
      { letter: 'C', text: "Caminha com calma e elegância, prestando atenção na postura." },
      { letter: 'D', text: "Sente que está sendo observada e gosta da atenção." },
      { letter: 'E', text: "Usa o quadril, o rebolado vem naturalmente, quase performático." }
    ]
  },
  {
    id: 2,
    question: "Na forma como você senta…",
    options: [
      { letter: 'A', text: "Mantenho as pernas retas, sem cruzar muito, tudo mais neutro." },
      { letter: 'B', text: "Me sento confortável, às vezes cruzo, às vezes não. Tudo flui." },
      { letter: 'C', text: "Me posiciono com cuidado, cruzo as pernas com elegância." },
      { letter: 'D', text: "Sento devagar, cruzando as pernas de forma charmosa." },
      { letter: 'E', text: "Gosto de chamar atenção ao sentar, é quase uma performance." }
    ]
  },
  {
    id: 3,
    question: "Seu olhar costuma ser…",
    options: [
      { letter: 'A', text: "Direto, prático, sem muito envolvimento." },
      { letter: 'B', text: "Suave e espontâneo, sem esforço." },
      { letter: 'C', text: "Contido e refinado, com presença." },
      { letter: 'D', text: "Intenso, misterioso, magnético." },
      { letter: 'E', text: "Provocador, marcante, hipnótico." }
    ]
  },
  {
    id: 4,
    question: "Se alguém te observa dançando, o que vê?",
    options: [
      { letter: 'A', text: "Movimentos mais contidos, pouca expressão corporal." },
      { letter: 'B', text: "Uma mulher leve, que curte a dança sem se preocupar." },
      { letter: 'C', text: "Uma dança sutil, sofisticada, com gestos pequenos." },
      { letter: 'D', text: "Um show de curvas, olhares e intenção." },
      { letter: 'E', text: "Uma mulher que dança com ousadia, como se dominasse o ambiente." }
    ]
  },
  {
    id: 5,
    question: "Quando você se arruma para um encontro…",
    options: [
      { letter: 'A', text: "Penso mais na roupa do que nos gestos." },
      { letter: 'B', text: "Me arrumo com leveza, sem esforço." },
      { letter: 'C', text: "Escolho o look certo e presto atenção nos detalhes da minha postura." },
      { letter: 'D', text: "Escolho algo que valorize o corpo e realce meu charme." },
      { letter: 'E', text: "Vou para impactar, decote, salto, atitude e intenção." }
    ]
  },
  {
    id: 6,
    question: "Nos seus movimentos do dia a dia…",
    options: [
      { letter: 'A', text: "São mais retos, sem muitos contornos ou curvas." },
      { letter: 'B', text: "Misturam fluidez e praticidade, sem rigidez." },
      { letter: 'C', text: "São econômicos, discretos, sempre elegantes." },
      { letter: 'D', text: "São envolventes, com curvas e presença." },
      { letter: 'E', text: "São amplos, ousados, com bastante quadril e peito solto." }
    ]
  },
  {
    id: 7,
    question: "As pessoas já te disseram que…",
    options: [
      { letter: 'A', text: "Você parece fechada ou reservada." },
      { letter: 'B', text: "Você é leve e espontânea." },
      { letter: 'C', text: "Você tem classe e discrição." },
      { letter: 'D', text: "Você tem um 'quê' diferente que atrai." },
      { letter: 'E', text: "Você é provocante e tem presença marcante." }
    ]
  },
  {
    id: 8,
    question: "Em uma sala cheia, seu corpo:",
    options: [
      { letter: 'A', text: "Se retrai, prefere neutralidade." },
      { letter: 'B', text: "Se adapta e se movimenta com naturalidade." },
      { letter: 'C', text: "É elegante e não exagera." },
      { letter: 'D', text: "Chama atenção mesmo em silêncio." },
      { letter: 'E', text: "É o centro das atenções, naturalmente ou não." }
    ]
  }
]

const profiles = {
  A: {
    title: "Sensualidade Neutra",
    icon: Heart,
    color: "from-gray-400 to-gray-600",
    description: "Sua sensualidade é mais contida e prática. Você tem um charme natural que não precisa de exageros para ser notado. Sua força está na autenticidade e simplicidade."
  },
  B: {
    title: "Sensualidade Natural",
    icon: Sparkles,
    color: "from-green-400 to-emerald-600",
    description: "Você possui uma sensualidade espontânea e fluida. Seu charme vem da naturalidade e leveza com que se move pelo mundo, sem forçar situações."
  },
  C: {
    title: "Sensualidade Minimalista",
    icon: Crown,
    color: "from-purple-400 to-indigo-600",
    description: "Sua sensualidade é refinada e elegante. Você sabe que menos é mais e usa a discrição como sua maior arma de sedução. Classe e sofisticação definem seu estilo."
  },
  D: {
    title: "Sensualidade Óbvia",
    icon: Eye,
    color: "from-pink-400 to-rose-600",
    description: "Você tem uma sensualidade marcante e magnética. Sabe usar seu charme de forma intencional e gosta da atenção que desperta. Seu poder de atração é evidente."
  },
  E: {
    title: "Sensualidade Exagerada",
    icon: Flame,
    color: "from-red-400 to-orange-600",
    description: "Sua sensualidade é intensa e performática. Você não tem medo de se destacar e usar todo seu poder de sedução. Sua presença é impossível de ignorar."
  }
}

export default function SensualityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>>({})
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<'A' | 'B' | 'C' | 'D' | 'E' | null>(null)

  const handleAnswer = (questionId: number, answer: 'A' | 'B' | 'C' | 'D' | 'E') => {
    const newAnswers = { ...answers, [questionId]: answer }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResult(newAnswers)
    }
  }

  const calculateResult = (finalAnswers: Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>) => {
    const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 }
    
    Object.values(finalAnswers).forEach(answer => {
      counts[answer]++
    })

    const maxCount = Math.max(...Object.values(counts))
    const resultLetter = Object.keys(counts).find(key => counts[key as keyof typeof counts] === maxCount) as 'A' | 'B' | 'C' | 'D' | 'E'
    
    setResult(resultLetter)
    setShowResult(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResult(false)
    setResult(null)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showResult && result) {
    const profile = profiles[result]
    const IconComponent = profile.icon

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4 flex items-center justify-center">
        <Card className="w-full max-w-2xl mx-auto shadow-2xl">
          <CardHeader className="text-center pb-6">
            <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${profile.color} flex items-center justify-center`}>
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {profile.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {profile.description}
            </p>
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-2xl">
              <h3 className="font-semibold text-gray-800 mb-2">Seu Perfil Sensual:</h3>
              <p className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {profile.title}
              </p>
            </div>
            <Button 
              onClick={resetQuiz}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              Fazer Quiz Novamente
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Qual é o seu perfil sensual?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra se sua sensualidade é neutra, natural, minimalista, óbvia ou exagerada, 
            e como despertar seu verdadeiro poder de atração através da sua linguagem corporal.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-800 leading-relaxed">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full p-6 text-left justify-start h-auto border-2 hover:border-pink-300 hover:bg-pink-50 transition-all duration-300 hover:scale-[1.02] text-gray-700 hover:text-gray-900"
                onClick={() => handleAnswer(questions[currentQuestion].id, option.letter)}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    {option.letter}
                  </div>
                  <span className="text-base leading-relaxed">{option.text}</span>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Navigation */}
        {currentQuestion > 0 && (
          <div className="mt-6 text-center">
            <Button
              variant="ghost"
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              className="text-gray-600 hover:text-gray-800"
            >
              ← Pergunta Anterior
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}