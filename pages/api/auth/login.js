import db from '../../../libs/db';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).end();

  const { email, password, is_admin } = req.body;
  const checkUser = await db('users').where({ email }).first();
  if(!checkUser) return res.status(401).end();
  const comparePass = await bcrypt.compareSync(password, checkUser.password);
  if(!comparePass) return res.status(401).end();

  const token = jwt.sign({
    id: checkUser.id,
    email: checkUser.email
  },'ptperorangan',{ expiresIn: '1d' });

  console.log(token);

  res.status(200);
  res.json({
    message: 'login successfully...'
  })
}
