export interface QuizStatistics {

    totalQuestions: number;
  
    correctAnswers: number;
  
    wrongAnswers: number;
  
    percentage: number;
  
  }
  
  export function calculateStatistics(
  
    totalQuestions: number,
  
    score: number
  
  ): QuizStatistics {
  
    const percentage =
      totalQuestions === 0
        ? 0
        : Math.round(
            (score / totalQuestions) * 100
          );
  
    return {
  
      totalQuestions,
  
      correctAnswers: score,
  
      wrongAnswers:
        totalQuestions - score,
  
      percentage,
  
    };
  
  }