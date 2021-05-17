import React from "react"; 7.6K (gzipped:3.2K)
exprot default class FetchData extends React.Component
{
    state={
        loading:true,
        word:null,
    };
    async componentidMount(){
        const url="https://raw.githubusercontent.com/invictustech/test/main/README.md"
        const response=await fetch(url);
        const data = await response.json();
        console.log(data.result[0]);
        this.setState({word:data.result[0],loading:false})
    }
    render()
    {
        return(
            <div>
                {this.state.loading|| !this.state.word?(
                    <div>loading..</div>
                );
            (
                <div>
                    <div>{this.state.word}</div>
                </div>
            );
        }
            </div>
        )
    }
}