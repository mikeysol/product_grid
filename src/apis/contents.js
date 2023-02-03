export const getContent = (page) => {
    return {
        "data": [
            {"type": "html", "contents": "<p>Example HTML text.</p>", "position": "row-1"},
            {"type": "html", "contents": "<p>Some other content.</p>", "position": 3},
            {"type": "html", "contents": "<p>Another Row.</p>", "position": "row-4"}
        ]
    }
}