const db = require("../util/database");

module.exports = class User {
  constructor(overallScore, username, email, password, gender) {
    this.overallScore = overallScore;
    this.username = username;
    this.email = email;
    this.password = password;
    this.gender = gender;
  }

  save() {
    return db.execute(
      " INSERT INTO user (overallScore, gender, username, email, password) VALUES (?, ?, ?, ?)",
      this.overallScore,
      this.username,
      this.email,
      this.password,
      this.gender
    );
  }

  static deleteById(id) {}

  static fetchAll(cb) {
    return db.execute("SELECT * FROM user");
  }

  static findById(id, cb) {
    return db.execute("SELECT * FROM user WHERE user.userID = ?", [id]);
  }

  static getRepetitionList(id, cb) {
    return db.execute(
      `
    
    SELECT sentence, original_sentences.sentenceID, isRepeated, isErrorOccured
    FROM original_sentences
    INNER JOIN user_sentences
    ON original_sentences.sentenceID = user_sentences.sentenceID
    WHERE user_sentences.userID = ?
    ;
    
    `,
      [id]
    );
  }

  static seeUserItems(id, cb) {
    return db.execute(
      `
      SELECT userItemName, userItemImg , user_items.userItemID
      FROM user_items
      INNER JOIN user_item_list
      ON user_items.userItemID= user_item_list.userItemID
      WHERE user_item_list.userID = ?
      ;
      `,
      [id]
    );
  }

  static seeAnimals(id, cb) {
    return db.execute(
      `
      SELECT animals.animalName, animals.animalStrength, animals.animalHealth, animals.animalLevel, animal_classes.animalClassName, animalItemName, animalItemImg, animals.animalID
      FROM ((((user_animal
      INNER JOIN animal_item_list ON user_animal.animalItemListID = animal_item_list.animalItemListID )
      INNER JOIN animals ON animal_item_list.animalID = animals.animalID)
      INNER JOIN animal_classes ON animal_classes.animalClassID = animals.animalClassID)
      INNER JOIN animal_items ON animal_items.animalItemID = animal_item_list.animalItemID)
      WHERE userID = ?
      ;
      `,
      [id]
    );
  }

  static seeMounts(id, cb) {
    return db.execute(
      `
      SELECT animal_items.animalItemName, animal_items.animalItemImg, mounts.mountName, mounts.mountSpeed, mounts.mountImg, mounts.mountID
      FROM (((user_mounts
      INNER JOIN mount_item_list ON user_mounts.mountItemListID = mount_item_list.mountItemListID)
      INNER JOIN animal_items ON mount_item_list.animalItemID = animal_items.animalItemID)
      INNER JOIN mounts ON mount_item_list.mountID = mounts.mountID)
      WHERE userID = ?;
      ;
      `,
      [id]
    );
  }

  static seeClans(id, cb) {
    return db.execute(
      `
      SELECT clans.clanFlagImg, clans.clanName, clans.clanID
      FROM (user_clans_list
      INNER JOIN clans ON user_clans_list.clanID = clans.clanID 
      )
      WHERE userID = ?
      ;
      `,
      [id]
    );
  }
};
