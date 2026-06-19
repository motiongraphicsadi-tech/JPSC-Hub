export function calculateMastery(
    accuracy: number,
    revisionStage: number
  ) {
  
    return Math.min(
      100,
  
      Math.round(
        accuracy * 0.8 +
        revisionStage * 4
      )
    );
  }