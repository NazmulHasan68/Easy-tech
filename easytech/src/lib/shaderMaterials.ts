// src/lib/util.ts এর শেষে add koro

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshSineMaterial: {
      map?: THREE.Texture
      'map-anisotropy'?: number
      'map-repeat'?: [number, number]
      side?: THREE.Side
      toneMapped?: boolean
      time?: { value: number }
      ref?: React.Ref<any>
    }
    bentPlaneGeometry: {
      args?: [number, number, number, number, number]
    }
  }
}