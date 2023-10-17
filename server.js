const oracledb = require('oracledb');

async function run() {
  let connection;

  try {
    connection = await oracledb.getConnection({
      user: 'DWLG',
      password: 'DWLG01',
      connectString: '103.129.187.74:1521/PKWMS', 
    });

    console.log('Connection established successfully!'); // 연결 성공 시 출력

  } catch (error) {
    console.error('Error:', error);
  } finally {
    if (connection) {
      try {
        await connection.close();
        console.log('Connection closed successfully!'); // 연결 종료 시 출력
      } catch (error) {
        console.error('Error closing the database connection:', error);
      }
    }
  }
}

run();