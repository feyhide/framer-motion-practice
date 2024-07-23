import React from 'react'
import Container from './Container'

function Header() {
  return (
    <>
            <header className='relative px-6 w-full bg-blackbg text-white z-50'>
                <Container className='flex items-center bg-blackbg z-50'>
                    <a className='-ml-6 h-10 w-15 flex items-center py-6 px-6' href='/'>
                        <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZlZmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTI1LjU2NSw5Ljc4NWMtMC4xMjMsMC4wNzcgLTMuMDUxLDEuNzAyIC0zLjA1MSw1LjMwNWMwLjEzOCw0LjEwOSAzLjY5NSw1LjU1IDMuNzU2LDUuNTVjLTAuMDYxLDAuMDc3IC0wLjUzNywxLjk2MyAtMS45NDcsMy45NGMtMS4xMTksMS43MDMgLTIuMzYxLDMuNDIgLTQuMjQ3LDMuNDJjLTEuNzk0LDAgLTIuNDM4LC0xLjEzNSAtNC41MDgsLTEuMTM1Yy0yLjIyMywwIC0yLjg1MiwxLjEzNSAtNC41NTQsMS4xMzVjLTEuODg2LDAgLTMuMjIsLTEuODA5IC00LjQsLTMuNDk2Yy0xLjUzMywtMi4yMDggLTIuODM2LC01LjY3MyAtMi44ODIsLTljLTAuMDMxLC0xLjc2MyAwLjMwNywtMy40OTYgMS4xNjUsLTQuOTY4YzEuMjExLC0yLjA1NSAzLjM3MywtMy40NSA1LjczNCwtMy40OTZjMS44MDksLTAuMDYxIDMuNDE5LDEuMjQyIDQuNTIzLDEuMjQyYzEuMDU4LDAgMy4wMzYsLTEuMjQyIDUuMjc0LC0xLjI0MmMwLjk2NiwwLjAwMSAzLjU0MiwwLjI5MiA1LjEzNywyLjc0NXpNMTUuMDAxLDYuNjg4Yy0wLjMyMiwtMS42MSAwLjU2NywtMy4yMiAxLjM5NSwtNC4yNDdjMS4wNTgsLTEuMjQyIDIuNzI5LC0yLjA4NSA0LjE3LC0yLjA4NWMwLjA5MiwxLjYxIC0wLjQ5MSwzLjE4OSAtMS41MzMsNC4zMzljLTAuOTM1LDEuMjQyIC0yLjU0NSwyLjE3NyAtNC4wMzIsMS45OTN6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"/>
                    </a>
                </Container>
            </header>
            <div className='sticky top-0  border-b-2 bg-blackbg border-white border-opacity-50 z-20 py-5 h-[70px] text-white px-6'>
                <Container className='flex items-center justify-between'>
                    <p className='text-2xl font-semibold'>Apple TV+</p>
                    <button className="rounded-full bg-white text-textc size-md px-5 py-1">stream now</button>
                </Container>    
            </div>
        
    </>
  )
}

export default Header