  export const getColor = (id: number, point: number): string => {
    if (id === 1) return '#ff0000' //クワガタ・カブトムシ
    if (id === 2) return '#4169e1' //ゼミ
    return '#000000' //その他
  }

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
      return id === "21" || id === "41"
    }).reduce((prev, current) => {
      return current.point + prev
    }, 0)

    // セミポイント
    // 好き：サクラ・モミ・ケヤキ
    const cicadaPoint = points.filter(({id}) => {
      return id === "28" || id === "42" || id === "57"
    }).reduce((prev, current) => {
      return current.point + prev
    }, 0)

    return [
      {id: 1, point: beetlePoint},
      {id: 2, point: cicadaPoint}
    ]
  }

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



