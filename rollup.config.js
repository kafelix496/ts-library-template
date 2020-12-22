import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

const common = (isProd) => ({
  plugins: [
    resolve(),
    babel({
      babelrc: true,
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    isProd && terser(),
    typescript({
      clean: true,
      useTsconfigDeclarationDir: true,
      tsconfig: './tsconfig.bundle.json'
    })
  ]
})

const results = (umdName, external) => [{
  input: `src/index.ts`,
  external: Object.keys(external),
  output: {
    file: `dist/index.es.js`,
    format: 'es'
  }
}, {
  input: `src/index.ts`,
  external: Object.keys(external),
  output: {
    file: `dist/index.cjs.js`,
    format: 'cjs'
  }
}, {
  input: `src/index.ts`,
  external: Object.keys(external),
  output: {
    file: `dist/index.umd.min.js`,
    format: 'umd',
    name: umdName,
    globals: external
  }
}]

export default results('CUSTOM_UMD_GLOBAL_VARIABLE', {}).map((object) => ({
  ...common(true),
  ...object
}))
