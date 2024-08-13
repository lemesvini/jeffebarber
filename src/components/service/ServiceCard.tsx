export default function ServiceCard(props: any){
    return(
        <>
            <div className="flex flex-col w-90 bg-[#191919] p-3 rounded items-center hover:cursor-pointer">
                <span className="font-bold m-2">{props.title}</span>
                <span className="text-[#6e6e6e]">(Verificar)</span>
                <div className="flex flex-row w-full items-center justify-between border p-2 rounded mt-3">
                    <span className="text-[#6e6e6e]">{props.duration}</span>
                    <span className="bg-[#143A4E] flex justify-center items-center p-2 rounded">{props.price}</span>
                </div>
            </div>
        </>
    );
}
