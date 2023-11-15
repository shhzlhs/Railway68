package lhs.testing.service;

import lhs.testing.entity.Competition;
import lhs.testing.form.competition.CreateCompetitionForm;
import lhs.testing.form.competition.UpdateCompetitionForm;

import java.util.List;

public interface ICompetitionService {

    List<Competition> getAllCompetitions();

    void createCompetition(CreateCompetitionForm form);

    void updateCompetition(UpdateCompetitionForm form);

    void deleteCompetitions(List<Integer> ids);
}
