
  // 色はここを参考にしました
  // https://www.colordic.org/

  export const getColor = (id: number): string => {
    if (id === 1) return '#ff0000' //クワガタ・カブトムシ
    if (id === 2) return '#4169e1' //ゼミ
    return '#00bfff' //その他

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
    
  }

