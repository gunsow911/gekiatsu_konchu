  export const getColor = (id: number): string => {
    if (id === 1) return '#ff0000' //クワガタ・カブトムシ
    if (id === 2) return '#4169e1' //ゼミ
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

    return [
      {id: 1, point: beetlePoint},
      {id: 2, point: cicadaPoint}
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
   * 樹木の中で一番の昆虫ポイントを取得する
   */
  export const getInsectPoint = (trees: {[id:string] :number}): {id: number, point: number} => {
    const points = getInsectPoints(trees)

    const beetlePoint = points[0].point
    const cicadaPoint = points[1].point

    if (beetlePoint === 0 && cicadaPoint === 0) {
      return {id: 0, point: 0}
    }
    if (beetlePoint >= cicadaPoint) {
      return {id: 1, point: beetlePoint + cicadaPoint}
    }
    return {id: 2, point: beetlePoint + cicadaPoint}
  }



