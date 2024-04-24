import React, { useState, useEffect } from 'react';
import { driver } from 'neo4j-driver';

const Neo4jComponent = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // 创建 Neo4j 驱动程序的连接
    const neo4jUri = 'bolt://localhost:7687';
    const neo4jUser = 'neo4j';
    const neo4jPassword = '320170yym';
    const neo4jSession = driver.session({
      uri: neo4jUri,
      auth: { user: neo4jUser, pass: neo4jPassword }
    });

    // 执行 Neo4j 查询
    neo4jSession.run('MATCH (n) RETURN n LIMIT 10')
      .then(result => {
        const records = result.records.map(record => record.get('n').properties);
        setRecords(records);
      })
      .catch(error => console.error('Neo4j query error:', error));

    // 关闭 Neo4j 会话
    return () => {
      neo4jSession.close();
    };
  }, []);

  return (
    <div>
      <h1>Neo4j Records:</h1>
      <ul>
        {records.map((record, index) => (
          <li key={index}>{JSON.stringify(record)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Neo4jComponent;