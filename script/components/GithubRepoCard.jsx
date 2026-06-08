import React, { useState, useEffect } from 'react';

export default function GitHubRepoCard({ owner, repo }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/repos/${owner}/${repo}`)
            .then(res => res.json())
            .then(setData);
    }, [owner, repo]);

    if (!data) return <p>Loading...</p>;

    return (
        <a href={data.html_url} target="_blank" rel="noreferrer" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px 24px',
            borderRadius: 12,
            border: '1px solid #e0e0e0',
            background: '#fff',
            textDecoration: 'none',
            color: 'inherit',
            maxWidth: 500,
            marginTop: 16,
            gap: 12,
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: '#1a1a1a' }}>
                    {data.owner.login}/<strong>{data.name}</strong>
                </span>
                {data.description && (
                    <span style={{ fontSize: 13, color: '#555', lineHeight: 1.4 }}>
                        {data.description}
                    </span>
                )}
                <div style={{ display: 'flex', gap: 16, fontSize: 12, color: '#888', marginTop: 4 }}>
                    {data.language && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <span style={{
                                width: 10, height: 10, borderRadius: '50%',
                                background: '#888', display: 'inline-block'
                            }} />
                            {data.language}
                        </span>
                    )}
                    <span>𐀪 {data.subscribers_count ?? 0} Contributors</span>
                    <span>★ {data.stargazers_count}</span>
                    <span>Ψ {data.forks_count}</span>
                </div>
            </div>
            <img
                src={data.owner.avatar_url}
                alt="avatar"
                style={{ width: 48, height: 48, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }}
            />
        </a>
    );
}