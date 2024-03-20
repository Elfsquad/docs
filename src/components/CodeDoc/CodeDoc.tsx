import React, { useEffect, useState } from 'react';
import MDXPre from '@docusaurus/theme-classic/lib/theme/MDXComponents/Pre'
import CodeBlock from '@theme/CodeBlock';
import { CodeDocSection } from '@site/src/components/CodeDoc/CodeDocSection';
import { calculateNavbarHeight } from '@site/src/utils/themeUtils';

export const CodeDoc = ({children}) => {
    const [height, setHeight] = useState(null);
    const [metadataString, setMetadataString] = useState('');
    const [activeSection, setActiveSection] = useState(-1);
    
    const childElements = React.Children
        .toArray(children)
        .filter(child => React.isValidElement(child)) as React.ReactElement[];
    const codeBlock = childElements.find(child => child.type === CodeBlock || child.type === MDXPre);
    const sections = childElements.filter(child => child.type === CodeDocSection );
    const codeBlockRef = React.useRef<HTMLDivElement>();
    const sectionRefs = sections.map(() => React.useRef<HTMLDivElement>());

    const calculateVisibleHeight = () => {
        const rect = codeBlockRef.current.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const height = Math.floor(Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)));
        setHeight(height - 32);
    };

    const activateSection = (index) => {
        if (!sections[index]?.props.highlight) return;
        if (index < 0 || index >= sections.length) return;
        if (index == activeSection) return;

        setActiveSection(index); 
        setMetadataString(sections[index].props.highlight);

        if (!codeBlockRef.current) return;
        const highlightedLines = codeBlockRef.current
            .getElementsByClassName('theme-code-block-highlighted-line') as HTMLCollectionOf<HTMLSpanElement>;

        if (highlightedLines.length > 0) {
            setTimeout(() => {
                codeBlockRef.current.scrollTop = highlightedLines[0].offsetTop - 24;
            }, 200);            
        }
    };

    const onScroll = () => {
        const scrollY = window.scrollY + calculateNavbarHeight();
        
        const sectionIndex = sectionRefs.findIndex(sectionRef => {
            return sectionRef.current.offsetTop > scrollY;
        });
        if (sectionIndex != activeSection) activateSection(sectionIndex);        
    };
        
    useEffect(() => {
        calculateVisibleHeight();
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        activateSection(0);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return <div className="grid grid-cols-2 gap-8">
        <div>
            {
                sections.map((section, index) => {
                    return <div 
                        key={index}
                        ref={sectionRefs[index]}
                        className={`CodeBlockSection rounded p-4 cursor-pointer ${activeSection == index ? 'bg-adaptable-green': ''}`} 
                        onClick={() => activateSection(index)}>
                        <CodeDocSection {...section.props}></CodeDocSection>
                    </div>
                })            
            }
        </div>
        <div ref={codeBlockRef} style={{height: `${height}px`, top: `${calculateNavbarHeight()}px`}} className={`overflow-y-scroll sticky scroll-smooth`}>
            <CodeBlock {...codeBlock.props} metastring={metadataString} key={metadataString}></CodeBlock>
        </div>
    </div>
}