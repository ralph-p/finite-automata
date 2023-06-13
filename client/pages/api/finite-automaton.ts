// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getErrorMessage, reqToFiniteAutomationDTO, runFiniteAutomaton } from '@/constants';
import type { NextApiRequest, NextApiResponse } from 'next'

export type FSMResponseData = {
  state?: string;
  value?: string;
  error?: string;
}



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FSMResponseData>
) {
  try {
    const faProps = reqToFiniteAutomationDTO(req)  
    const output = runFiniteAutomaton({...faProps})
    // need to do a `toString` because a 0 triggers a `false` when trying to render
    const modval = Array.from(faProps.finalStates).indexOf(output).toString();    
    res.status(200).json({ state: output, value: modval })
  } catch (error) {
    res.status(400).send({error: getErrorMessage(error)})
  }
}
