import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}



// 'use client'
// // import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
// import clsx from 'clsx';
// import { useState } from 'react';
// import Button from '../components/Button';

// export default function InvoiceStatus({ status }: { status: string }) {
//   const [text, setText] = useState('');
//   const [items, setItems] = useState<string[]>([]);

//   const handleAdd = () => {
//     if (text.trim()) {
//       setItems([...items, text]);
//       setText('');
//     }
//   };
  
//   return (
//     <div className="flex flex-col gap-4">
//       {/* New input and button section */}
//       <div className="flex gap-2">
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           className="border rounded px-2 py-1"
//         />
  
//      <Button 
//         onClick={handleAdd} 
//         variant={items.length <= 2 ? "default" : "secondary"}
//         // disabled={items.length >= 5}
//       // size={items.length <= 2 ? "small" : "large"}
//       size="small"
//       >
//         Add
//       </Button>
 
//      </div>

//       {/* Display items */}
//       <div className="flex flex-col gap-2">
//         {items.map((item) => (
//           <div key={item} className="text-sm">{item}</div>
//         ))}
//       </div>
//     </div>
//   );
// }





  // variant={items.length <= 2 ? "default" : "secondary"}

