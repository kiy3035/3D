const oracledb = require('oracledb');

async function run() {
  let connection;

  try {
    connection = await oracledb.getConnection({
      user: 'DWLG',
      password: 'DWLG01',
      connectString: '103.129.187.74/PKWMS', 
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error('Error closing the database connection:', error);
      }
    }
  }
}

run();