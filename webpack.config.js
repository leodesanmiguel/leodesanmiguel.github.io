import path from 'path';
import webpack from 'dotenv-webpack';
import DotenvWebpackPlugin from 'dotenv-webpack';
import { Module } from 'module';


Module.exports = (env) => {
    const isProduction = env.NODE_ENV === 'production';
    const dotenvFilename = isProduction ? '.env.production' : '.env.development';
  
    return {
      entry: './src/index.js',
      output: {
        path: path.resolve('/dist' , 'dist'),
        filename: 'main.bundle.js',
      },
      plugins: [
        new DotenvWebpackPlugin({
          path: dotenvFilename,
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
        }),
      ],    
    };
  };