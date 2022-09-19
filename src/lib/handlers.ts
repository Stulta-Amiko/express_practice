import { getFortune } from "./fortune";

const home = (req:any,res:any) => {
    res.render('home')
}

const about = (req: any,res: any) => {
    res.render('about',{fortune: getFortune()})
}

const notFound = (req:any,res: any) => {
    res.render('404')
}

const serverError = (req:any, res:any) => {
    res.render('500')
}

export {home,about,notFound,serverError}