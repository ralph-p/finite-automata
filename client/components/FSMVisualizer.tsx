import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3'

type FSMVisualizerProps = {
    currentState: string
    states: string[];
}
export const FSMVisualizer = ({ currentState, states }: FSMVisualizerProps) => {
    const svgRef = useRef(null);
    useEffect(() => {
        const svg = d3.select(svgRef.current);
        // Use D3 to manipulate the SVG and visualize the FSM
        svg.selectAll('circle').remove()
        svg.selectAll('text').remove()
        // Example: Draw circles for states
        svg
            .selectAll('circle')
            .data(states) // Replace with your actual data
            .enter()
            .append('circle')
            .attr('cx', (d: string, i: number) => i * 150 + 40)
            .attr('cy', 150)
            .attr('r', 40)
            .attr('fill', (d: string) => (d === currentState ? 'red' : 'blue'));
        svg
            .selectAll('text')
            .data(states)
            .enter()
            .append('text')
            .attr('x', (d: string, i: number) => i * 150 + 40)
            .attr('y', 150)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'central')
            .text((d: string) => d)
            .attr('fill', 'white');
    }, [currentState]);

    return (
        <svg ref={svgRef} width={600} height={400} />
    );
};