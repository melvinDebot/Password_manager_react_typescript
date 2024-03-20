import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import List from './List';
import { describe, test, expect, vi } from 'vitest';

describe('List test', () => { 
  const mockList = [
    { id: 1, password: "Password1", show: false, website: "Melvin.com" },
    { id: 2, password: "Password2", show: true, website: "Max.com" },
  ];

  const mockOnDelete = vi.fn();
  const mockOnShow = vi.fn();

  test('Rend correctement les éléments de la liste', () => {
    render(<List list={mockList} onDelete={mockOnDelete} onShow={mockOnShow} />);

    // Vérifiez que les sites web sont correctement affichés
    mockList.forEach(item => {
      expect(screen.getByText(`SITE : ${item.website}`)).toBeDefined();
    });

    // Vérifiez que le texte du mot de passe est affiché ou masqué selon la propriété 'show'
    expect(screen.getByText('******')).toBeDefined(); // Pour l'élément avec show=false
  });

  test('Appelle onDelete avec le bon id', () => {
    render(<List list={mockList} onDelete={mockOnDelete} onShow={mockOnShow} />);

    // Simuler le clic sur le bouton "Delete" du premier élément
    fireEvent.click(screen.getAllByText('Delete')[0]);
    expect(mockOnDelete).toHaveBeenCalledWith(mockList[0].id);
  });

  test('Appelle onShow avec le bon id', () => {
    render(<List list={mockList} onDelete={mockOnDelete} onShow={mockOnShow} />);

    // Simuler le clic sur le bouton "Show password" du premier élément
    fireEvent.click(screen.getAllByText('Show password')[0]);
    expect(mockOnShow).toHaveBeenCalledWith(mockList[0].id);
  });

})

