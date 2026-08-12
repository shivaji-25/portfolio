// Fetch LeetCode statistics automatically
// Update your username in portfolioData.js

// GraphQL query for LeetCode official API
const LEETCODE_GRAPHQL_QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
  }
`;

export async function fetchLeetCodeStats(username) {
  try {
    // Try official LeetCode GraphQL API
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: LEETCODE_GRAPHQL_QUERY,
        variables: { username }
      })
    });
    
    if (!response.ok) {
      throw new Error('GraphQL request failed');
    }
    
    const data = await response.json();
    const stats = data?.data?.matchedUser?.submitStats?.acSubmissionNum;
    
    if (!stats) {
      throw new Error('No stats found');
    }
    
    // Parse the difficulty counts
    const allCount = stats.find(s => s.difficulty === 'All')?.count || 0;
    const easyCount = stats.find(s => s.difficulty === 'Easy')?.count || 0;
    const mediumCount = stats.find(s => s.difficulty === 'Medium')?.count || 0;
    const hardCount = stats.find(s => s.difficulty === 'Hard')?.count || 0;
    
    return {
      totalSolved: allCount,
      easy: easyCount,
      medium: mediumCount,
      hard: hardCount,
    };
  } catch (error) {
    console.error('Error fetching LeetCode stats from GraphQL:', error);
    return null;
  }
}

// Alternative public API
export async function fetchLeetCodeStatsAlternate(username) {
  try {
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch LeetCode stats');
    }
    
    const data = await response.json();
    
    return {
      totalSolved: data.totalSolved || 0,
      easy: data.easySolved || 0,
      medium: data.mediumSolved || 0,
      hard: data.hardSolved || 0,
    };
  } catch (error) {
    console.error('Error fetching alternate LeetCode stats:', error);
    return null;
  }
}

// Third backup API
export async function fetchLeetCodeStatsBackup(username) {
  try {
    const response = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch LeetCode stats');
    }
    
    const data = await response.json();
    
    return {
      totalSolved: data.solvedProblem || 0,
      easy: data.easySolved || 0,
      medium: data.mediumSolved || 0,
      hard: data.hardSolved || 0,
    };
  } catch (error) {
    console.error('Error fetching backup LeetCode stats:', error);
    return null;
  }
}
