<!-- How to handle asynchronous operations using async/await
over callback/promise TypeScript. -->



In asynchronous operation typescript use various method . it use using types like when we return
some data using asynchonous operation after completing the operation we get some data and it defined
by type and we add it returnds places . we declear it when start fetch and go to try block and returned
the data likes typescripts type.


example One:

interface Data{
    id: string,
    name: string,
    email:string,
}


const testing = async(): Promise<Data[]> =>{
    try{
        const response = await fetch("http://tigerVi.Pashavi.Kabila/data");
        const data : Data[] = await response.json();
        return data;

    }
    catch(error){
    console.error("Error fetching data", error)
    }
}

testing()