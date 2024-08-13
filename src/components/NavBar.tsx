import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const WhatsAppLink = "";

function NavBar(){
    return(
        <>
        <div className="flex w-full top-0 bg-[#191919] h-16 items-center text-white p-3 justify-between">
            <Link href="/" className='cursor-pointer'>
                <span>Logo</span>
            </Link>
            <Link href={WhatsAppLink} target='_blank' className='flex flex-row'>
                
                <Button variant="outline-success" className='flex flex-row gap-2 items-center'>
                    <FontAwesomeIcon icon={faWhatsapp} className='h-5 w-5'/> 
                    <span>WhatsApp</span>
                </Button>
            </Link>
        </div>
        </>
    );
}
export default NavBar;