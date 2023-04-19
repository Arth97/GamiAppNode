import { GameBuilder } from '../domain/game/gameValue'

export class GameDirector {
  gameBuilder: GameBuilder

  public setBuilder (gameBuilder) {
    this.gameBuilder = gameBuilder
  }

  public buildTimedHintsQuestions (challengeNumber) {
    return this.gameBuilder
      .setTime(3)
      .setHints(3)
      .setChallenges(challengeNumber)
      .setChallengeType('A')
      .build()
  }

  public buildTimedHintsTrueFalse (challengeNumber) {
    return this.gameBuilder
      .setTime(3)
      .setHints(3)
      .setChallenges(challengeNumber)
      .setChallengeType('B')
      .build()
  }

  public buildTimedQuestions (challengeNumber) {
    return this.gameBuilder
      .setTime(3)
      .setChallenges(challengeNumber)
      .setChallengeType('A')
      .build()
  }

  public buildTimedTrueFalse (challengeNumber) {
    return this.gameBuilder
      .setTime(3)
      .setChallenges(challengeNumber)
      .setChallengeType('B')
      .build()
  }

  public buildHintsQuestions (challengeNumber) {
    return this.gameBuilder
      .setHints(3)
      .setChallenges(challengeNumber)
      .setChallengeType('A')
      .build()
  }

  public buildHintsTrueFalse (challengeNumber) {
    return this.gameBuilder
      .setHints(3)
      .setChallenges(challengeNumber)
      .setChallengeType('B')
      .build()
  }
}
