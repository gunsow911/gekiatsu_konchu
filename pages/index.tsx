import dynamic from 'next/dynamic';
import React from 'react';

export default function Home() {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("../components/Map"), {
        loading: () => <p>地図をロード中です…</p>,
        ssr: false,
      }),
    []
  );
  return (
    <div>
      <Map />
    </div>
  )
}
