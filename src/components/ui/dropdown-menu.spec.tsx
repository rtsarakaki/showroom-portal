import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup
} from './dropdown-menu'

describe('DropdownMenu', () => {
  it('should render the dropdown menu trigger', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
    expect(screen.getByText('Open Menu')).toBeInTheDocument()
  })

  // it('should open the dropdown menu when trigger is clicked', () => {
  //   render(
  //     <DropdownMenu>
  //       <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
  //       <DropdownMenuContent>
  //         <DropdownMenuItem>Item 1</DropdownMenuItem>
  //       </DropdownMenuContent>
  //     </DropdownMenu>
  //   )
  //   fireEvent.click(screen.getByText('Open Menu'))
  //   expect(screen.getByText('Item 1')).toBeInTheDocument()
  // })

  // it('should render a checkbox item', () => {
  //   render(
  //     <DropdownMenu>
  //       <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
  //       <DropdownMenuContent>
  //         <DropdownMenuCheckboxItem checked>
  //           Checkbox Item
  //         </DropdownMenuCheckboxItem>
  //       </DropdownMenuContent>
  //     </DropdownMenu>
  //   )
  //   fireEvent.click(screen.getByText('Open Menu'))
  //   expect(screen.getByText('Checkbox Item')).toBeInTheDocument()
  // })

  // it('should render a radio item', () => {
  //   render(
  //     <DropdownMenu>
  //       <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
  //       <DropdownMenuContent>
  //         <DropdownMenuRadioGroup>
  //           <DropdownMenuRadioItem>Radio Item</DropdownMenuRadioItem>
  //         </DropdownMenuRadioGroup>
  //       </DropdownMenuContent>
  //     </DropdownMenu>
  //   )
  //   fireEvent.click(screen.getByText('Open Menu'))
  //   expect(screen.getByText('Radio Item')).toBeInTheDocument()
  // })

  // it('should render a sub menu', () => {
  //   render(
  //     <DropdownMenu>
  //       <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
  //       <DropdownMenuContent>
  //         <DropdownMenuSub>
  //           <DropdownMenuSubTrigger>Sub Menu</DropdownMenuSubTrigger>
  //           <DropdownMenuSubContent>
  //             <DropdownMenuItem>Sub Item</DropdownMenuItem>
  //           </DropdownMenuSubContent>
  //         </DropdownMenuSub>
  //       </DropdownMenuContent>
  //     </DropdownMenu>
  //   )
  //   fireEvent.click(screen.getByText('Open Menu'))
  //   fireEvent.mouseOver(screen.getByText('Sub Menu'))
  //   expect(screen.getByText('Sub Item')).toBeInTheDocument()
  // })
})
