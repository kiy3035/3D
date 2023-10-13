const path = require('path')

module.exports = {
  mode: 'production', // 빌드 모드 설정 (production 또는 development)
  entry: './src/index.js',  // 진입점(entry) 파일 설정: 웹팩 번들링의 시작점
  output: { // 출력(output) 설정: 번들된 파일의 경로와 이름
    path: path.resolve(__dirname, 'public'), // 번들된 파일이 저장될 디렉토리 경로
    filename: 'bundle.js', // 번들된 JavaScript 파일의 이름
  },
  performance: { // 성능(performance) 설정: 번들 크기 제한 설정
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000
  },
  devServer: {
    publicPath: '/public/',
    compress: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        // 부트스트랩의 CSS 파일을 로드하기 위한 추가 로더 설정
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
    ],
}
}
