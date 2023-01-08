export const getColor = (id: number): string => {
  if (id === 1) return '#ff0000' //クワガタ・カブトムシ
  if (id === 2) return '#4169e1' //ゼミ
  if (id === 3) return '#800080' //カミキリムシ
  return '#000000' //その他
}

/**
 * 樹木の中での昆虫ポイント一覧を取得する
 */
export const getInsectPoints = (trees: {[id:string] :number}): {id: number, point: number}[] => {
  const total = Object.keys(trees).reduce((sum, id) => {
    return sum + trees[id]
  }, 0)

  const points = Object.keys(trees)
    .sort((a, b) => {
      return trees[b] - trees[a]
    })
    .map((id) => {
      const percent = ((trees[id] / total) * 100).toFixed(2)
      return {id, point: Number(percent)}
    })

  // 甲虫ポイント
  // 好き：クヌギ・コナラ
  const beetlePoint = points.filter(({id}) => {
    return isBeetleLike(id)
  }).reduce((prev, current) => {
    return current.point + prev
  }, 0)

  // セミポイント
  // 好き：サクラ・モミ・ケヤキ
  const cicadaPoint = points.filter(({id}) => {
    return isCicadaLike(id)
  }).reduce((prev, current) => {
    return current.point + prev
  }, 0)

  // カミキリムシポイント
  // 好き：ミカン科、イチジク、ナシ、ヤナギ、モミジ、クリ、シイ
  const longhornBeetlePoint = points.filter(({id}) => {
    return isLonghornBeetleLike(id)
  }).reduce((prev, current) => {
    return current.point + prev
  }, 0)

  return [
    {id: 1, point: beetlePoint},
    {id: 2, point: cicadaPoint},
    {id: 3, point: longhornBeetlePoint},
  ]
}

/**
 * 甲虫が好きな木かどうか
 * 好き：クヌギ・コナラ
 */
export const isBeetleLike = (treeId: string) => {
  return treeId === "21" || treeId === "41"
}

/**
 * セミが好きな木かどうか
 * 好き：サクラ・モミ・ケヤキ
 */
export const isCicadaLike = (treeId: string) => {
  return treeId === "28" || treeId === "42" || treeId === "57"
}

/**
 * カミキリムシが好きな木かどうか
 * 好き：ミカン科、イチジク、ナシ、ヤナギ、モミジ、クリ、シイ
 */
export const isLonghornBeetleLike = (treeId: string) => {
  return treeId === "23" || treeId === "24" 
}

/**
 * 樹木の中で一番の昆虫ポイントを取得する
 */
export const getTopInsectPoint = (trees: {[id:string] :number}): {id: number, point: number} => {
  const points = getInsectPoints(trees)
  const top = points.reduce((prev, current) => {
    return prev.point < current.point ? current : prev
  }, {id: 0, point: 0})
  return top
}



