import React from 'react';

class File extends React.Component {
    setFileContent() {
        if (!this.props.fileContent) {
            console.log('no data');
            return;
        }


        return this.props.fileContent.map((dataString, i) => {
            return (
                <tr key={i} className="Code-Line">
                    <td className="Code-Num Code-Num_color_darker">{i}</td>
                    <td className="Code-String">
                        <pre className="Code-String-pre">{dataString}</pre>
                    </td>
                </tr>
            )
        });
    }

    render() {
        const nameOfFile = this.props.history.location.pathname.match(/\w+\.\w+|\w+$/)[0];

        return (
            <article className="File">
                <header className="File-Header">
                    <h1 className="File-Title File-Title_before_code">{nameOfFile} <span className="File-Size">(4 347 bytes)</span></h1>
                    <a href='/' download className="File-Download" title="Download">
                        <i className="fas fa-download File-Download-icon"></i>
                    </a>
                </header>
                <div className="File-Content">
                    <table className="File-Content-table Code-Block">
                        <tbody>
                            {this.setFileContent()}
                        </tbody>
                    </table>
                </div>
            </article>
        )
    }
}

export default File;