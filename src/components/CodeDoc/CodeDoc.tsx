import React, { useEffect, useState } from 'react';
import MDXPre from '@docusaurus/theme-classic/lib/theme/MDXComponents/Pre'
import CodeBlock from '@theme/CodeBlock';
import { CodeDocSection } from './CodeDocSection';


export const CodeDoc = ({children}) => {
    const [metadataString, setMetadataString] = useState('');
    const [activeSection, setActiveSection] = useState(0);

    const childElements = React.Children
        .toArray(children)
        .filter(child => React.isValidElement(child)) as React.ReactElement[];

    const codeBlock = childElements.find(child => child.type === CodeBlock || child.type === MDXPre);
    const sections = childElements.filter(child => child.type === CodeDocSection );
    const sectionRefs = sections.map(() => React.useRef()) as React.RefObject<HTMLDivElement>[];

    const activateSection = (index) => {
        if (index < 0 || index >= sections.length) return;
        setActiveSection(index);
        setMetadataString(sections[index].props.highlight);
    };

    const onScroll = () => {
        const scrollY = window.scrollY;
        const sectionIndex = sectionRefs.findIndex(sectionRef => {
            return sectionRef.current.offsetTop > scrollY;
        });
        activateSection(sectionIndex);        
    };
        
    useEffect(() => {
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return <div className="grid grid-cols-2 gap-8">
        <div>
            {
                sections.map((section, index) => {
                    return <div 
                        key={index}
                        ref={sectionRefs[index]}
                        className={`CodeBlockSection rounded p-4 hover:bg-adaptable-green cursor-pointer ${activeSection == index ? 'bg-adaptable-green': ''}`} 
                        onClick={() => activateSection(index)}>
                        <CodeDocSection {...section.props}></CodeDocSection>
                    </div>
                })            
            }
        </div>
        <div>
            <CodeBlock {...codeBlock.props} metastring={metadataString} key={metadataString}></CodeBlock>
        </div>
    </div>
}