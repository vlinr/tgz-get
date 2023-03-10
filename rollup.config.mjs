import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import json from '@rollup/plugin-json';
export default {
    input: 'src/index.js',
    output: {
        format: process.env.NODE_ENV,
        file:'./app/tgz.js',
        name:'tgz'
    },
    plugins: [
        commonjs(),
        resolve(),
        json(),
        babel({
            exclude: ['node_modules/**','demo/**','lib/**','server/**'],
            runtimeHelpers:true
        }),
        terser(),
        filesize(),
    ],
};
