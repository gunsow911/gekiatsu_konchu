/**
 * idから木の名称を取得する
 */
export const getTreeName = (id: string) => {
  if (id === "1") return 'スギ'
  if (id === "11") return 'ヒノキ'
  if (id === "12") return 'アカマツ'
  if (id === "13") return 'クロマツ'
  if (id === "15") return 'イチョウ'
  if (id === "16") return 'カヤ'
  if (id === "19") return '針葉樹'
  if (id === "21") return 'クヌギ'
  if (id === "22") return 'カシ'
  if (id === "23") return 'シイ'
  if (id === "24") return 'クリ'
  if (id === "25") return 'キリ'
  if (id === "27") return 'ヤシヤブシ'
  if (id === "28") return 'ケヤキ'
  if (id === "29") return '広葉樹'
  if (id === "31") return 'マダケ'
  if (id === "32") return 'モウソウ'
  if (id === "33") return 'ハチク'
  if (id === "41") return 'コナラ'
  if (id === "42") return 'ヤマザクラ'
  if (id === "43") return 'ヤマグワ'
  if (id === "46") return 'ヤブツバキ'
  if (id === "49") return 'サカキ'
  if (id === "51") return 'ヤマモモ'
  if (id === "53") return 'イタヤカエデ'
  if (id === "55") return 'イヌマキ'
  if (id === "56") return 'コウヤマキ'
  if (id === "57") return 'モミ'
  return 'わからん'
}

/**
 * idから木の説明URLを取得する
 */
export const getTreeDescriptionUrl = (id: string) => {
  if (id === "11") return '/trees/hinoki'
  if (id === "12") return '/trees/akamatsu'
  if (id === "21") return '/trees/kunugi'
  if (id === "28") return '/trees/keyaki'
  if (id === "32") return '/trees/mousou'
  if (id === "42") return '/trees/sakura'
  return undefined
}
