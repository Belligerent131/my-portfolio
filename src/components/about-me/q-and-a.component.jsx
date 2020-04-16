import React from 'react';

const QandA = ({question, answer}) => (
    <div className="retainer">
        <span className="question">{question}</span>
        <span className="seperator"> : </span>
<span className="answer">{answer}</span>
    </div>
);

export default QandA;