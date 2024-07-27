'use client'

import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
  

  return (
    <header className="shadow sticky z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKoAtQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EAEYQAAEDAwMCAwQIAwQHCQEAAAECAwQABREGEiETMSJBUQcUYXEVMkJTgZGSoSNSsWJygsEWJDPC0eHwQ0Rjc5Oy0tPUJf/EABsBAQADAQEBAQAAAAAAAAAAAAACAwQFAQYH/8QAMhEAAgECBQIDBwQCAwAAAAAAAAECAxEEEiExQVHwBRNhInGBobHB0RQykfEj4RUkUv/aAAwDAQACEQMRAD8A7jSq5ddb6etUG3T5c8CHcMmO+hJUlQAzzjt/x4rDI19Y49tgTVqlkzysRYqYqy+5tJCsN4zgY70BaaVF6ev9u1HBVMtbyloQ4WnELQULaWO6VJPINUqFru5D2sTNNTUtfRe7osOBvCku9MLAKvjhX7UB0mlc3k67uK/a3E0zDS19F5U0+4W8qU6GisgKz5ZQMfOrWzq20vQLzNbcd6FndcamEtkFKmxlWB50BO0qsT9e2C3s2p6XIdQi6sF+JhlSitO0HGBzk5AA8ycVpS9ZwLzpK9zbLcXoD8BBS849FJcjK9S2e/n+/pQF0pVVk6ytlis9nN1muzJk2MhTaY8Yl2QdoJWG0/VB748u1R131fFuUCwz7LfFwmJN3biuJMPep1XOWVA8oPxoC90qo3X2jaetdwnW99yUuXBI6zTMZSyARndx9kDGT5ZFbcnW9hYssK7plLfjTztiiOypxbqucpCQM5GDnPbFAWOlUPUutmpns8vV401KdZlQiG1dVna4y5uTkKSoehq3RpgbsjU2WvwpjB11f+HJNAb1K5lar3r/AFRaXNQ2P6JiwllZhQZDalOPJSSPErIwSQf+uas9x1jEsNvtytRNrj3OY2CIEVJfc348QSE9wPWgLNSqyjXdgc0zK1CiU4qDEWG5A6Suo0sqCdqkdwcqFa6vaPpoQHZ5kve5tyURi+WFBClKBIIJ7p8J57UBbqVW7BreyX66OWyE6+iWlvqpbkMKaLiP5k7hyK0XPadpZucqOqY90kv9BUwR1mOHP5epjH49vPtQFypVZ1Bruw6euZt1yfeTL6AfS22ypZWkqwAnHc8Hj0BNYbt7Q7BaZTkeSqYtTCUqkqZiOLTHCgCN5A44INAWylc19ovtURpKTBZgW/3/AN5aLpcWpTaNpAKdqsEKzk59OPWlARMHR92t1q9nkGVCW8uDPW/LCE70xwpW8biOOM9/UVJ+0ey3Iaxteoo0e7SoTURUV9Fpd2SGjlRCk+oO7B+VdNpQFO9mlu9zgXCUq23KAubLU6U3J8OPO8Dxq48JPPB9KqV80zd5F01lcokF73uPOhT7WooOHltJO4J9eCR88V16lAcjsmmrtHv+irlKgve8Ovz510cCDhlx5I2hXpwAn8K15Ea/WyNrmxNacuEty7yJEiNKaSOjsWnzVn62OwGSTxXZKUBy6FY7km8ezNx23v8ATt9vcRLUUHDC+gAAr0O4Vgudiuzj/tOLdvklNwZjiHhs/wAchCgdvrya6xSgOWPwLtp7UGndSps0u5R27E3Akx4yAp6Osc5CSee+PzrJqJu+6it+mpTmnnoSmtRtPmOnxLQwCT1HAB4Tycjn966fSgOQW+8yrJ7RNcux7BOuyHVx0Ew0pUptXTO0KBOdp55GcYrFDtWq9N6M0zCTGnoYMl5y6ItaErkspUcoSjPbuckdu2a6hbbDAtt1udzioWJVyUhUkqWSCUAhOB5cGpSgOJxtP3tWmNc2pNlubbs9SJUUyV9VTqcpO0rydzmByOeeM11C0JN50eyzKiyYRkQyw4zIRtcR4Sg5H7j4YqcpQHKtOXbU+jtPJ007pOfOmxN7cSVFwqO8ColKlK+z3/byrYusbUVq1VY9Wz7S5c1ptZiTo9tTuUw4SVbkJJ5HOO/kfhXTaUBxi46evtx0hrm5G0yWJF8kx1xbbjLoQ24MqKR2JBJI+FTntbaWxoexMsRkrcbuMRKGFeEEgEBJ9B5V0uoy/WODfo8di4oWpuPIRJbCFlOFpzj+vagKKy1ddWe0O3XRdin2iHbIb7TjsxISpxa0lO1OCcgZyD279uKriLdqJr2er9np0vMXPLxQJ2EmKUl7f1N+fT4Z7fKu4UoCgwbJMj+1ZiY7GdchsaeTHTLKPCXQ4OM+uM1XdZxNT3afqS2yIN7fadT/APy0QlJbiKTs5LquCo8DwknJ4xiuwUoDiWt9Hag1hpTSAt9ucYegRFsyGJag2tBAbSDj0OwkfDFK7bSgFKUoBSlKAUpSgFKV4dUkJ2Kc6ZWCEnIB/DNHoFqa8+e3ADa30OdFRwp1IyG/ir4VtIUlaQpCgpJGQQcg1Wp8yXDKoS5qH1DBBCUh3HoUnhY+WDUrZIKoUYhSiOp4ukCdjf8AdB5Ge+Ky068p1XFLT6fnv4aqlGMKak3r9fx38ZAkAEk4A71o2W7xL1D97gqUWt6keNODkHHaqNr3WVufbkWWO/JwF7JLjCEkKH2kJUT39eMdxVZ0rqS3acuZfimf7o6giQ04lslZH1cYUAMZPP4VY6yUrcGul4ZUnQc2nm4XfU7dWGVKYiNhyS4ltJUEjPmT5VitVxi3a3szoLm9h1OUnsR6gjyIqEWp2NeuvcEpfcSD0gkFSseQbQOw9VKrytVyJNc88GGlRzSalxxyWalakB6W+FOSWG2W1AFtIXuV8zjj07Vt1bGSkroqlHK7MUpSpERSlKAUpSgFKUoBSlKAUpSgFKUoBUbd3IWUtTobkgYynawXAPxA4qSrXmGYAgQkMknO5TqiAn8AOarqq8H+L/IspO0l+bFXgshd1joEd1tnqZAIdAAHI4WCPLyrBqy93m2uSGJLbce3yZCGmZ27Abb2ZWDtyoKJBAO3jvWxJQq2T0PPISp0K3b0oCEqJ7gFRUo/gKm75bY+obI9DWcJeRlC8coUOQceoPlWLCqylDZnSnUhGpCc1eL/ADuUq2vRGoLTdvWFxkDCCkLcHf8Am91Ofzra96+f/or/APyVoezq8OWRNytFyjzFGO9kBiM47sUchQO0HA8OR65NTuqtVto09O9wj3FEhTexK3ILraUZ4KipSQBgE1pi1lvctq05KvkUG7ve/XnYrNjvD9vvL0bTa27gi4JcX7uhwnpPYz1MqQgYJ7j4fKrrcmpb1ghvXFtAnBKeukDKQojxDG4A8+pxUN7K9PiBazdX0f6xMThoH7DXl+ff5Yqf1PISmOhjaTlW5Z8kj4naoD8aqqpKg3MhXnGWKUKS23fLMFsbQpCHJV0eb6ZG1nqtoTgduE8Y+FWOq3agylDaJVqW4HCCh/pNuJwe3KR2+OKslSwn7P7v8zDi/wB/9W+QpSlazKKUpQClKUApSlAKUpQClKUArwtxKFtoUfEskJH4ZrBc5iIEJyS4QAnAGfNRIA/ciqfqDUrlv1O6OgtTbMf3doqO1HVWUqKiryAAH5VGUkjPXxEKKvL07+RPyNRRGffHysGPEJbO3GXXO5Sn5cc+p+FeLBd/pqGuR/FZLiD4sHDfyONvHr3PoBgVAaf05HMl2dbbgxIbCQClMbqZIHIC1nuTmtCAbn7Q5U2NcpSrTbIbnSetjBw+s/8AiHHb5cHB9M1OlTdROUnZIqoSrTanLRdN7/Em9YSYGmLSiU+1OeW86G1PNKBcUcE4KlfVBx5VBTNQ6xttqVPj6bjWy1RFJW4065vdWjcM+fB55JHFaeqLZe41uNgvV5gpsSFhTMp5JXKdQDlKAkckp7Z4+flUjE1wzOchWIRy5EeCYr0uaU7nEkbSSkcZPxPn2qX/AFcNayTl9vsdqlhcZioOUU8q1vx/slZkWHqJpy5aXuhiyXg2qVKjuqOEpGQlSQoDfg+fb8q1WNP+9w0TLjqObcLG+yS8284pG0fzEhXYY5z2rZvlzi6YgS7THtnubTrKhEdjpGxRKceL0UD8/KojRGpG4NtVbFxZMx9bx6LLSAfCQM5z2Gc/nWeeTOc7/mXSrKjm0t01vxrv7rehvv6uuDt8+itGQIl0iw4iVuq6+0HyCUr7dsfv6Vr2y4t3DVTcKZGutquT6FLLTpCsAZOUrB5TwRyMV9vN7iaKuyW7ZaYaHJjSXZjLZ2lCvLBAx/Nxj4+dQwvb83VK9QWB6Kbg8wI5t9yGzCfRtwHaSSM4JB5NXS/SYh+XJWtt7/odSOFxtKl+ogm4y+nqtzqcNuUwlaZL6H0JA2KSjar8ccflUCrVLMO9NwJLbiG3s4WoEbD/AIgDg8/LyyDxXTpbUNqhO6j/ANIy1eikvTESCPdlJA+ofTA4z+WO9WDTl1d1pppMosqguFZQre0lxCyO5TuHKf8AMGpToZIXhK6XfJyq7qT1i7P3f0TEC7NSFSmFqCpET64RzvSRlK0/Aj9+KkUKStIUggpUMgjzFc3QiHo2cuSmU1Kkbyl5gILK+krH1QeDgjNTekbypvT8ZExC0FmSmJ404JSrGz+oH4VRGfDMtHF3lkqaPXvvoW6lKVYbxSlKAUpSgFKUoBSlR9+m/RttVNKSpDK0KWB/LuAUfyJNHoRlJRi5PgrOqZS7naZ7DLqW1RbilCypX2QMjA8+cceoqKKZLMCZddS25pTMdwuuSJe4qc5ACENggc8AZ45r5dLBMk6oli3ykKeWpE1lOcpAyPEr0xnjg5Fb10vqdLy2LZMiTL/cZzRW708K4/lSj0wDwPSo0qbqVLWucqnCVas3NOy09Hv39yO01ZdQagjOakReXLVJfP8AqUdpIUylodkqR2x6fn51gkuq0XIlTZkpFw1VcAeotPDTDeePDxnsMD4enf1oyQ9apOpr2qDLtlpaQksW55KkArPoDxnIxx/NjyqIVbEz4C71eZTiZEgqecKSAAnICQMg8nIxz2I9DVuOrzg3Thz8l0PrPCMFSqy82t+1O1ur7+xX5kuRNkOSZjy3nl8qcWcn/kPh2qTiacfdbbcnuphNvD+EhbanHnR/YaT4iPnipnSdiXiLJDTbk+ZlUNt3lLDae76x58kBI8zj8LXvTp2YtZbDrZUESpjhKnnCQk5J7ADd9X07DiuL5c3rY+kxfiapPyqO6+3Tj0593JpW61XNuC5GbRdZDC0lOy4TENpIIwcJCVqH7VgU8qxkWhZNvLieo2iPcsrXkkeEra/s9s1aYl/gSoXVS703zhIYd4UFkcJI8qrNov8AOdusaTKTbVKWpLbuD/EbT4jwdvYAKPf09atpxmmszPn8zqVJVZ0lmXOzK1cdNBToUiZIZfdOQi6o2F0/B4ZSo/Dg1XpkSRCkLjTGFsvJ+shYwf8AmPjXb7tfrK22iPMW0+iQMdIgEEFORkHyOR+dU6faxJjhiW10ra6pIhvKOVQVK+qknJJbJ4we2R+EatLI9Hc6+B8WqS0qrTvb8fO+jg7NqNuTb12DUq3H7VIAQHtx3xznIOfNIOO/b5cVZGdGaklwUwJepy1boqNkIQkbVOgDwKWRjtxxz2qlxLEpU6RDnSmorzDhbU2fEpRHJI7YTjnccDsPOrTZ5dylaVvum2pLiLhBZK4jjCuXG+4SkjyPABHksVuwWJqRapt6PrwZPG8DRknXo7rVpcp8r7kxZZ3+k0CTZrwxDN/tqtjyXkbkLx9tJBBwfh2J7eVQV2hXpMhxhTH0dH6jZQjqbmVOJ4SUrPbPHfz7180dqKy6djW9g6ZusSVLW1HfmvR8JW4o8+NRzjOTgDt5VaNTabnTEON2mZiK8oe8Q1nKRyDlGfq+uOK04ullldI+JxlDPHNFO/p336k5brimXc7lGT/3RTaCc9yU5P8Aw/CpKufaXxa7Y66X/eFXSciM1yd2N2FFXocFX7etdBqqLujRharqQvLf8t2+QpSlSNIpSlAKUpQCoXUiTMgyrVuSl+Wyr3bccBZHJT8/8j8KmqgdXQ3J8DpwlFNwjkSY2Dgkp7gfgf3FRlsU4i/lu2pQrJbNRe/lEF1xt55HRkOq7sAbfConsQNuAPl5cbF0s94serYN7s9qXdoUWHs6nvCQXFHeVKJJJz4/Q1qW5d+luvxm3FsouTpdlOgY6YBO/J+yP64FbibLHvmuLnbXrlcWbezCYcjIjyShO0oSMYPGPw9atwVk5PixzfDYxs2k/j9vqzLqnVCL5oGDcfcy21Ll7VMqdyCEbvtDyymoTUD6H2GIrVufjh1xLIdcjtpSCNqRtO3OQE+vGT3xirPrTTUe26BZgW3epiE+FguLBIC1KBJOPIr/AAFQ1+UqXZBJjvtuBCULDqGkYcKM8BRVkDdu8udvbvnDirOrLLtx7j9B8JlFYek+cz/nTv4F604y39KXd5KMdBxuE1/ZbbbSQB/iWr9qqd6Uo6gfc3NtsmSCHY8ZRcKxx3wc9gDx/nUxaJ7zl4KoIQqPdW0zmyXSjJ2JQtI4PIKQT868Tyt1CPeHkLQFqWG0LT4lZPYknjxqTnA5xntUnrHQ51pQrNy5S+n5RCEsOlkIWwSHEIcTLawptA2q+soDKPCpJ4zg58600w43RaZSWXTHYXt3lCi4ooVjd33EcemVYqWeiAqS6042to7CU9NDuw9icZ8PhA+PhpLMhLCwtx55KfrofhtbFBRwR9f0OfTjmoF0Z20TNYLaZjltLqGil1KltxmDtbwlQyccK7jjjuD9mt3ScVm4IuMFYiqZdhlrwPK3Y9dp+eSc8GvC4EN+Kht95vcpACUs4QBlKhggL7gOLBxj6wx8JeRLl2+2KlqUtbqmw2gISAXHFBIQkZPYk/Z891epa3ZCU2/ZhuyoXl+UZVqmsx3ZEm525pTzbC1IKnEHlRKfLt8OK3rG/Lb17bHZcH3JySw4ypoOBQ43n/dA/CsM9LbV0airdjLi2uE1CWHFjLrmU78DPYZGScjwngmt2xoVO9ojSU7VItkdZWpIwN6ir/7Mf4TVcb5vijq1JR8iWmmWXXa2npzHg1dUXy4aziuQLDp+a4uBcB/rJcQAlxsnI5PofXzq36otkx11u4WOQWLmhHLQXgPoHkR2OM+fr8qrWtNLN6ftF4vtqu91ivLd66mWpG1tS1rAPAAPn61L3ZiZJ0vZn40lYu7DCHm1bvG6Qgbx8T5488V18TldJOG3z4PhcSr0ndfxv8PUrWmrVNTfI78v+FHiLMiSFnalg4z4vIEjb+HyrqMKQJcZEhIIbd8TeRg7fI/j3/GuWW6PeLzc3WXSW2LipL00p4CUJJ4Pp8vlXVYrjTrCFMf7LGEEdiBxx8KxUzJ4YkotJO3rz2rfFmWlKVadUUpSgFKUoBWheobE2EpL7imSg7230cKZV5KB8v8AhW/Sj1IyipKzOUXZu/NuzfeZCB7y23H6yRhuUnnBCuwPGD2+tjzqVv1s0g4zOuV3ivvu2xLcZ5TK3MqwkBOAk47nGTjtzUjqzTiX4z5gl+MlfiW20krZcI5yUDkHPmkGqrHu8exJkxmQiR13GlPJB3trbwreg5wc845qFOo6M7nHU3hKrz7Plu/UmvZ7Almx3E3JCI+npoUuJGed3rabVnOVHgJIPn58/OmXMXXTExy0uODptrLjRU2lSXB9lYyO47/A5qx3TT2nrfElSbheZa9PMvEItKXDjr55SOckdiB+JNZtKaXmX7TC0XxbjcVSt1qDnifjN+W5XGUnjwkeXlxi/GUFWi60Hr38+p9Z4T4hDDTy1FeD35t6lY05emozH0bcHHWo3U6seU1y5Dd/mHqk+Y+dXeJ7iqK01eJTkcLRhE5p7LEnKQnclz7JIA8JwQe2TzXP9QaduNge2zWtzJOESWxltX4+R+B/etjSl4iWUyn5rs1WRhhhhKShK/vCFHaSPLI/yrmUW82WenvPo/EMPCtR8+h7TfTW7+3rx7nqdKfiW8gu++vHp5UhbjZ6Z+ClbcFOfXgVqW7Skj3yYqR02463ssrQ6pxSm+TkhXAVnzTjgkele9PawakWiVNmRpbEGMDiXLWnc+r+UAAAk+g48qoidXJSjH0e6oZVtQq4vJbSCThIQCBgDjHwrVW8uCTOFg8Ni60pQS2320+aL/OiW23JRF9+d94+xHjJC3nOCMlI+KsknjIBJ4qqXi6tWeQuQoNru+NseMlW9EDwhJWs5ILhAHA4Bz6kmvSdTXBTJYjdG3MOjJbhtdLqA+ZV9Y/nUWzHeecbaYZcW459RCEElXOOB581kqVHskd3B+GRh7VWV7/Pr/ta++10Zo1zuMUpMefLQQrcAl5WConvjOCSfhzXT9JafnWvTM33Z1pq+zW+pl7xFrOdm7z9T8ye+KjtNaBmxo6rhKcabuSUFURlY3Iacx4VOY74PkOPnUdpmwvXB2477xPt+tWFq67jiwQtB+rhPZTfbkdj+FbMFhtHUm7W719DmeN+J06n+Chty+voeNK6c0/d3pFlvwuCL9Gz7y0uYoh3nJWkg4I5Hx5FWTVclC2GPot5LTtmmIbJUryKOMDufTHng1qSWYWhrDJj2twvXZ1xCZUtfK1KXuVkny4ScD45+NRDcVm/3VyXCeW047LLuzYpxxKe4O0DaOT5ny71di6/mStF3Xex8RjMQn/hhq+/oyZ07bJ7y1RrxIU3AVIW50CNq5qs8kjvt4B9K6CAAAAMAdgKjbJa2bcyVJQ4ZDn+0efXvdc/vH/IcVJ1XGNkbMLR8qFnuKUpUjSKUpQClKUApSlAfFAKBB7GqfqrTHvSVOxt6lKTglTKXSn5H6//ALql9Y3b6D07KnhxTakbUpcDXU2FSgkHbkZxn1qs2D2gOzCG3mYk88cwHtjvzLLuD+kqqxYeVSGZLQprUoVY5ZFRmERWn4N0QqWl55t5e9K0njcFDxAKBIUOflVgQvVQZkWjTtxRNiqcDCJMpQEiIkjIO7PiG3ODgnjtxVlfuunr4r3ZyYYk0jhmSpcZ0f4VYz+4qCe0deIYKLKtpKFkKU57xkkpOUkeEYxz2J71CMqtDRq66M58KdfCu0faj6bm/YdOTNPSfo+Dc3LhEW1ukQ5TYKErP2gv7IJyduDn96+StM2OFLLqoEZ6WEhagWz7uzk4ThoHxEngJ5yR5VZLU77up1ib/Cluuqc8R4cB7bT54GE4/s+mKzO21DlzamlxQ2YJawMKUAoJV+AUr9vSrJSzSzS3OxCrOEWoSaTKfJ0NOv0pt6+3d8RW1ZZiNISktjyHGUpPyyfjU3B0RYIKD7vCHW24TIcPUWk4xuG7IB+OKsdKq5uWyxNaUPLzez0Wi/hHNvoNhVyebj2R6Q6h1QU88ou8gnxKcXkHPHCMEdjXqYm/olRoNomwLe88djy1J3rzzwOFE4H8yqul4jTJABZcHu6EFS2Epyp5XknO5Ix8CcHPPFQi0TW2gJCXoTZ/2bYfSlR+CQ1jn4bVVqhNPXQolKT3ZEuW/WGllKjWeULvHmDJfnK5iO91LJJ+qeTj/pUNLYTZvfbhKuL1x1AXBFXLKtqWgpJKw2PLA4z8eAKud8hXe42CHFgNLacDgLvvD+5SkpzjcfPJwai4mmo9udNwv82PFcOS6szCkLJ5JJ8OM+mapqV6krwit931OfiXWk/Lpr4kBEgy7/cX5jZcLT75d6RYUsDk4znCOAfWukWK0N22KhOVFzuRhKQD/dThP9T8aiFaxtTDBRZIsu5JQPrxkYZHzeWQj9zUEx7Q33r5CjPPW9tt6QhoxohMlZ3HaNzvhQnkg8bu1eU8JU3sSw2EhReZu8jpNKUqBuFKUoBSlKAUpSgFKUoCpe1Rl2Roa4IYacdXuaVtbSVHAcSScD0HNcr0s1En2OYxLiw5KmC442XnQgtDZ3JHiSndjkHGTg44z0b2pLtPTtyZ10bhzULUY7bgWpCwRg7wjxAdsLHY1RZUVKmw9IU03uBSH33d7CwRghMxvkA57Og11MLpRt1ZXLcwtRy+104l6bcghCFuNSnkSGUbsbUkOAFBOccJODxzW4ozbU+n6MQp1sqU1vtdyUyQ4jAUnpkqSrGQeE4wRUcrTsm3kS4r0iBlOAuQ2H46x/5zYUkp+C0ivbr97S+1PZtceWwiU7IUqEUyGXQ5s3IwnOB4OM/5VoaT2d0eEqnXM6IFxLjOntqTwtu6Wxt7b89pQf2reia5a6YLV1tSsfZzLij8E4WkVSI+oVwbtdJTjb77ksrP8R9cdYUVbgVBsjPc+Ht6Yqyo1LaZN793fbjOMOyWF9d5ptTSWwxhafEnIPU8z3/rCdFf+e/4CZNp1zkYUq2rPqm+up/q2Ky/6Zt4PFrP97ULh/3a5/dp8CTpaIYkWIm4KdAkrLDSFoITwAEgEpUcnOPVJ8qsESRp2W+w61EtHQduLLZaXEDammi2sqCieD4gORx29ajKhBK+U9uyyDUM1UEzujb2oQ7yBc5jqR8cpbx+9Qz2vURlrVHvNuaWRyYlsddcUf77qxn8aj4t9htsQ5j6orUhq0sDZGZYS5gqcDiUlaFcgbMN8ZCjWWHq21w7ohxRLKSWlrEdtKmWsJO5tJTtJGdviwr7QGO9eKilf2b9+txcM6huF9uLEJMu/vGTkp6jyYje0DJOGk5I4/m+Ga1Swt5lU+1KtzHROHFOx/eJKMqSlOFbncklQGMpP4VHx7vKueo4F1Yt8uV7s2hLiWGyrevadygBkJyT+QHnRpi9Li/R90nsIBiJipjLX1XUtpWlQ2stZOcpAyRn1q7Jl20PLkpcIUGLKxqS5y5ykKktbpS1BpLjSElIS2k5OVLAxuT2NaBeZnat08m0NJUy17otTUZgJ2KKklwqSnODnvycetZHLCiEyyi4qW23uKkKurvRBUcZKI6CXFE4HcjOBXx5FvUpuNNuDlvgFSeotaOktQJ/7OO3ykf23CTRW6376fYHfqVhhusPxGXYjqXWFIBbcQrcFJ8iD51mrhlopSlAKUpQClQnXe+9X+o06733q/1GgJulQnXe+9X+o06733q/1GgJKZAhzk7ZsRiQkjGHmwsfvUUnR1gaWpcW3IirVwoxVqZ3D0O0jNe+u996v9Rp13vvV/qNSU5LZgzWHT1t0+iQi1tLaRIX1HEFxSk7vUAnj8KxXHSdhuTxflWyP1z3ebHTc/UnBr513vvV/qNOu996v9Rr3zJ3zX1FiMk6DjLSEs3W4hsf9lJUiUj8nUqP71FyfZypSv4Zsbo9HLYWz+bbif6VZ+u996v9Rp13vvV/qNTWIqLk8sijyvZm8Tlm22dR9BMkt/8AyrwPZs/xmxWn4k3aSf22Ve+u996v9Rp13vvV/qNWfq6vX6/k8yopifZtI4CIdgZHmpQkvn91ipOJ7O0t7VLnRWVA5zEtbKCPkVhZqwdd771f6jTrvfer/Uai8VVfJ7lRrDRdscAE9+4ThjG2RLXsP+BJCf2qYttqt9qZ6NthR4rf8rLYTn54rQ6733q/1GnXe+9X+o1U6kpKzZ7Y1zoixKnyZy47ypEpe91ZkuZUfTv2+HatmJpLTsNe+PZYIXnO9TCVKz65OTXzrvfer/Uadd771f6jXrqzfLPLImW20NICG0JQgdkpGAK9VCdd771f6jTrvfer/UarPSbpUJ13vvV/qNOu996v9RoCbpUJ13vvV/qNfKA//9k="
                className="mr-3 h-12"
                alt="Logo"
              />
            </Link>
            <div className="flex items-center lg:order-2">
              {/* <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link> */}

              <img
                className="inline-block h-10 w-10 rounded-full"
                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                alt="Dan_Abromov"
              />
              <span className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">
                  Dan Abromov
                </span>
                <span className="text-sm font-medium text-gray-500">
                  @dan_abromov
                </span>
              </span>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                      border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/feature"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                      border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/benefits"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                      border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Benefits
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                      border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  )
}
