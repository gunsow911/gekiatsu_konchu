
  // 色はここを参考にしました
  // https://www.colordic.org/

  export const getColor = (id: number): string => {
    if (id === 1) return '#ff0000' //クワガタ・カブトムシ
    if (id === 2) return '#4169e1' //ゼミ
    return '#00000' //その他

    // if (id === 1) return '#a0522d' //アブラゼミ
    // if (id === 2) return '#a9a9a9' //クマゼミ

    // if (id === 3) return '#4169e1' //ミヤマクワガタ
    // if (id === 4) return '#4682b4' //コクワガタ
    // if (id === 5) return '#191970' // ヒラタクワガタ
    // if (id === 6) return '#00bfff' //アカアシクワガタ

    // if (id === 7) return '#ff0000' //カブトムシ
    // if (id === 8) return '#9932cc' //カナブン

  }

  export const getInsect = (trees: {[id:string] :number}) => {
    const ids = Object.keys(trees)
      .sort((a, b) => {
        return trees[b] - trees[a]
      })
      .map((id) => {
        return id
      })

    for (let i = 0; i < ids.length; i++) {
      const id = ids[i]
      if (id === "42" || id === "28") return 2
      if (id === "21" || id === "32") return 1
    }
    return 0
  }



