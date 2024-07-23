import { motion } from "framer-motion"

export const Fadein = ({children}) => {
    return(
        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{margin:"100% 0px -150px 0px"}} >
            {children}
        </motion.div>
    )
}