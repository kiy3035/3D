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
    // const sql = `INSERT INTO THREE_D_TEST (MAINFEST_NO, BL_NO, CNTR_NO, CNTR_TYP, CNTR_SIZE, INP_USR, INP_DT, UPD_USR, UPD_DT) 
    //              VALUES ('TESTLSH101701', 'TESTLSH1017_001', 'TESTLSH1017','TE', '20', 'LSH', '20231017','LSH', '20231017')`;
    // 쿼리 실행
    // const result = await connection.execute(sql);
    // await connection.commit();
    // console.log('Data inserted successfully!');

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