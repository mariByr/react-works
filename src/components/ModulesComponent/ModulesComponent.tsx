interface ModulesComponentProps {
    modules: string[]
}

export const ModulesComponent = ({modules}: ModulesComponentProps) => {

        return (
            <ul className='flex flex-wrap gap-x-4 gap-y-2'>
                {modules.map((m,index) => (
                    <li key={index}>{m}</li>
                ))}
            </ul>
        );
    };
