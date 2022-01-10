const db = require("../util/database");

module.exports = class Sentence {
  constructor(languageLevel, sentence) {
    this.languageLevel = languageLevel;
    this.sentence = sentence;
  }

  save() {
    return db.execute(
      "INSERT INTO original_sentences (languageLevel, sentence) VALUES(?, ?)",
      this.languageLevel,
      this.sentence
    );
  }

  static deleteById(id) {}

  static fetchAll(cb) {
    return db.execute("SELECT * FROM original_sentences");
  }

  static findById(id, cb) {
    return db.execute(
      "SELECT * FROM original_sentences WHERE user.userID = ?",
      [id]
    );
  }

  static markRepetition(id, cb) {
    return db.execute(
      `
        UPDATE user_sentences
        SET isRepeated=true, isErrorOccured=false,repetitionDate=now()
        WHERE userSentenceID = ?;  
          `,
      [id]
    );
  }

  static markError(id, cb) {
    return db.execute(
      `
        UPDATE user_sentences
        SET isRepeated=true, isErrorOccured=true,repetitionDate=now()
        WHERE userSentenceID = ?;
          `,
      [id]
    );
  }

  static seeErrors(id, cb) {
    return db.execute(
      `
      SELECT sentence 
      FROM original_sentences
      INNER JOIN user_sentences
      ON original_sentences.sentenceID = user_sentences.sentenceID
      WHERE user_sentences.userID = ? AND user_sentences.isErrorOccured = true
      ;  
      `,
      [id]
    );
  }
};
